import React from 'react'

// components
import SearchInput from '../components/search/SearchInput';
import BottomMenu from '../components/core/navbar/BottomMenu';
import JsImport from '../components/utils/JsImport';

const Core = () => {
    return (
        <>
            <main>
            <SearchInput />
            <BottomMenu />
            </main>
            {/* JS */}
            <JsImport />
        </>
    )
}

export default Core