import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Footer() {
    return (
        <footer className="bg-rose-900 text-white py-4">
            <div className="container mx-auto py-4 bg-rose-900">
                <p className="text-center text-amber-300">
                    &copy; {new Date().getFullYear()} Pedro Grizotte. All rights reserved.
                </p>
            </div>

            {/* Lista de redes sociais */}
            
        </footer>
    );
}

export default Footer;