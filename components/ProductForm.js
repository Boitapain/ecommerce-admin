import { isValidElement, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Spinner from "./Spinner";
import { ReactSortable } from "react-sortablejs";

export default function ProductForm({
    _id,
    title:existingTitle, 
    description:existingDescription, 
    price:existingPrice,
    images:existingImages,
    category:assignedCategory,
    properties:assignedProperties,
}) {
    const [title,setTitle] = useState(existingTitle || '');
    const [description, setDescription] = useState(existingDescription || '');
    const [category, setCategory] = useState(assignedCategory || '');
    const [productProperties, setProductProperties] = useState(assignedProperties || {});
    const [price, setPrice] = useState(existingPrice || '');
    const [images, setImages] = useState(existingImages || []);
    const [goToProduct, setGoToProduct] = useState(false); 
    const [isUploading, setIsUploading] = useState(false);
    const router = useRouter();

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get("/api/categories").then(result => {
            setCategories(result.data);
        });
    }, []);

    async function saveProduct(ev){
        const data = {
            _id,title,description,price,images,category,
            properties:productProperties,
        };
        ev.preventDefault();
        if(_id){
            await axios.put('/api/products',{...data,_id});
            setGoToProduct(true);
        }
        else{
            await axios.post('/api/products', data);
            setGoToProduct(true);
        }
        
    }
    if(goToProduct){
        router.push('/products');
    }

    async function uploadImages(ev){
        const files = ev.target?.files
        if(files?.length>0){
            setIsUploading(true);
            const data = new FormData();
            for(const file of files){
                data.append('file', file );
            }
            const res = await axios.post('/api/upload',data);
            setImages(oldImages => {
                return [...oldImages, ...res.data.links];
            });
            setIsUploading(false);
        }
    }

    function updateImagesOrder(images){
        setImages(images);
    }

    function setProductProp(propName, value){
        setProductProperties(prev => {
            const newProductProps = {...prev};
            newProductProps[propName] = value;
            return newProductProps;

        })
    }

    const propertiesToFill = [];
    if (categories.length>0 && category) {
        let catInfo = categories.find(({_id}) => _id===category);
        propertiesToFill.push(...catInfo.properties);
        while(catInfo?.parent?._id){
            const parentCat = categories.find(({_id}) => _id===catInfo?.parent?._id);
            propertiesToFill.push(...parentCat.properties);
            catInfo = parentCat;
        }
    }

    return (
        <form onSubmit={saveProduct}>
            <label>Product name</label>
            <input 
                type="text" 
                placeholder="product name" 
                value={title} 
                onChange={ev => setTitle(ev.target.value)}/>

            <label>Category</label>
            <select value={category} onChange={ev => setCategory(ev.target.value)}>
                <option value="">Uncategorized</option>
                {categories.length>0 && categories.map(c => (
                    <option value={c._id}>{c.name}</option>
                ))}
            </select>
            {propertiesToFill.length>0 && propertiesToFill.map(p => (
                <div className="">
                    <label>{p.name[0].toUpperCase()+p.name.substring(1)}</label>
                    <div>
                        <select value={productProperties[p.name]} 
                            onChange={ev => 
                            setProductProp(p.name, ev.target.value)
                            }
                        >
                            {p.values.map(v => (
                                <option value={v}>{v}</option>
                            ))}
                        </select>
                    </div>
                    
                </div>
            ))}

            <label>Photos</label>
            <div className="mb-2 flex flex-wrap gap-2">
                <ReactSortable list={images} className="flex flex-wrap gap-2" setList={updateImagesOrder}>
                {!!images?.length && images.map(link => (
                    <div key={link} className=" h-24 bg-white p-4 shadow-sm rounded-md border border-gray-200">
                        <img src={link} alt="" className="rounded-lg"/>
                    </div>
                ))}
                </ReactSortable>
                {isUploading && (
                    <div className="h-24 p-1 flex items-center rounded-md">
                        <Spinner/>
                    </div>
                )}
                <label className=" w-24 h-24 cursor-pointer
                text-center text-sm gap-1 text-primary 
                flex flex-col items-center justify-center 
                rounded-lg bg-white shadow-sm border border-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                    </svg>
                    <div>
                        Add image
                    </div>
                    <input type="file" onChange={uploadImages} className="hidden"/>
                </label>
            </div>

            <label>Description</label>
            <textarea 
                placeholder="description"
                value={description}
                onChange={ev => setDescription(ev.target.value)}/>
            <label>Price (in EUR)</label>
            <input 
                type="number" 
                placeholder="price"
                value={price}
                onChange={ev => setPrice(ev.target.value)}/>
            <button type="submit" className="btn-primary">Save</button>
        </form>
    )
}