import * as React from 'react';
const MyFeature = React.lazy(() => 
    Promise.all([
        import("./MyFeature"),
        new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        })
    ]).then(([m]) => m)
);

function Mypage() {
    return (
        <>
        <h1>My page</h1>
        <MyFeature/>
        </>
    )
}