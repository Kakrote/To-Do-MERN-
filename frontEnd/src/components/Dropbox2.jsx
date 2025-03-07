import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';

const Dropbox2 = () => {
    const [Isopean, setIsopean] = useState(false);
    const [IstypeOpen, setIstypeOpen] = useState(false);
    const [IsprivacyOpen, setIsprivacyOpen] = useState(false);
    const [typeFilters, setTypeFilters] = useState([]);
    const [privacyFilters, setPrivacyFilters] = useState([]);

    const filterType = [
        { value: "types", label: `Types ${typeFilters.length}`, color: "text-gray-600" },
        { value: "privacy", label: `Privacy ${privacyFilters.length}`, color: "text-gray-600" }
    ];

    const types = [
        { value: "backend", label: "Backend" },
        { value: "multipage", label: "Multi-Page" },
        { value: "singlepage", label: "Single-Page" }
    ];

    const privacys = [
        { value: 'private', label: 'Private' },
        { value: 'public', label: 'Public' }
    ];

    const handleOpen = () => {
        setIstypeOpen(false);
        setIsprivacyOpen(false);
        setIsopean(!Isopean);
    };

    const handleCheckboxChange = (value, filterType) => {
        if (filterType === "types") {
            setTypeFilters((prev) => prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]);
        } else if (filterType === "privacy") {
            setPrivacyFilters((prev) => prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]);
        }
    };

    const hanleClear = () => {
        setTypeFilters([]);
        setPrivacyFilters([]);
        setIsopean(false);
    };

    const totalFiltersCount = typeFilters.length + privacyFilters.length;

    return (
        <div className='relative'>
            <button 
                onClick={handleOpen} 
                className="flex items-center gap-2 px-2 border rounded w-42"
            >
                <span className="text-gray-500">Form Type {totalFiltersCount}</span>
                {Isopean ? <ChevronDown className="h-5 w-5 text-gray-600" /> : <ChevronUp className="h-5 w-5 text-gray-600" />}
            </button>

            <AnimatePresence>
                {Isopean && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className='absolute left-0 mt-2 p-2 border rounded bg-white w-48 shadow-lg'
                    >
                        <div className='gap-2 flex justify-between'>
                            <span className='text-gray-500'>Filters</span>
                            <button 
                                type="reset" 
                                className='shadow-md text-center px-2 rounded-md py-0.5 border-amber-200 border'
                                onClick={hanleClear}
                            >
                                Clear
                            </button>
                        </div>

                        {filterType.map((opt) => (
                            <div key={opt.value} className="relative">
                                <button
                                    type='button'
                                    onClick={() => {
                                        if (opt.value === "types") {
                                            setIstypeOpen(!IstypeOpen);
                                            setIsprivacyOpen(false);
                                        } else if (opt.value === "privacy") {
                                            setIsprivacyOpen(!IsprivacyOpen);
                                            setIstypeOpen(false);
                                        }
                                    }}
                                    className='flex justify-between items-center w-full py-2 hover:bg-gray-100'
                                >
                                    <span className={opt.color}>{opt.label}</span>
                                    <ChevronRight className='h-5 w-5 text-gray-600' />
                                </button>

                                <AnimatePresence>
                                    {opt.value === "types" && IstypeOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className='absolute top-0 left-full ml-2 p-2 border rounded bg-white w-48 shadow-lg'
                                        >
                                            {types.map((typ) => (
                                                <label key={typ.value} className='flex items-center gap-2 p-2 hover:bg-gray-100'>
                                                    <input 
                                                        type="checkbox"
                                                        checked={typeFilters.includes(typ.value)}
                                                        onChange={() => handleCheckboxChange(typ.value, "types")}
                                                    />
                                                    {typ.label}
                                                </label>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <AnimatePresence>
                                    {opt.value === "privacy" && IsprivacyOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className='absolute top-0 left-full ml-2 p-2 border rounded bg-white w-48 shadow-lg'
                                        >
                                            {privacys.map((pry) => (
                                                <label key={pry.value} className='flex items-center gap-2 p-2 hover:bg-gray-100'>
                                                    <input 
                                                        type="checkbox"
                                                        checked={privacyFilters.includes(pry.value)}
                                                        onChange={() => handleCheckboxChange(pry.value, "privacy")}
                                                    />
                                                    {pry.label}
                                                </label>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Dropbox2;
