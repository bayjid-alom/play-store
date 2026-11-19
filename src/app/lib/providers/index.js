import InstalledAppsProvider from '@/context/InstalledAppsProvider';
import React from 'react';

const Providers = ({children}) => {
    return (
       <InstalledAppsProvider>
        {children}
       </InstalledAppsProvider>
    );
};

export default Providers;