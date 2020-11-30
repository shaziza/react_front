export function request(url) {
    console.log('5656');
    fetch(url).then((response) => {
            console.log(response.json());
            return (
                response.json()
            );
        });
    // fetch(url)
    // .then(response => () => {
    //     console.log(response.json());
    //     return (
    //         response.json()
    //     );
    // });
}