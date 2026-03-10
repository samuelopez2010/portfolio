import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToAnchor() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        // If there is a hash (e.g., /#about), scroll to it
        if (hash) {
            // Remove the '#' to get the element ID
            const element = document.getElementById(hash.replace('#', ''))
            if (element) {
                // Add a small delay to ensure the page has rendered first when navigating from another page
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' })
                }, 100)
            }
        } else {
            // If no hash, just scroll to the very top (e.g., navigating to /projects)
            window.scrollTo({ top: 0, behavior: 'instant' })
        }
    }, [pathname, hash])

    return null
}
