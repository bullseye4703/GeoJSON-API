const storeForm = document.getElementById('store-form');

const storeId = document.getElementById('store-id')

const storeAddress = document.getElementById('store-address')

async function addStore(e) {
    e.preventDefault();

    if(storeId.value === '' || storeAddress.value === ''){
        alert('please fill in fileds')
    }

    const sendBody ={
        storeId: storeId.value,
        address: storeAddress.value
    }
    try {
        const res = await fetch('/api/v1/stores',{
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(sendBody)
        })
        if(res.status === 400){
            throw Error('store alredy exists')
        }
        alert('store added!')
        window.location.href = '/index.html';

    } catch (error) {
        alert(error);
        return;
    }
}


storeForm.addEventListener('submit', addStore)