document.addEventListener('alpine:init', () => {
    Alpine.data('Pesan', () => ({
        items: [
            {id: 1, name: 'Americano Coffe', img: 'Menu.webp', price: 30000 },
            {id: 2, name: 'ice latte', img: 'gambar 1.jpg', price: 60000 },
            {id: 3, name: 'Americano dingin', img: 'menu menu/1.jpg', price: 70000 },
            {id: 4, name: 'Americano Coffe', img: 'Menu.webp', price: 45000 },
        ],

    }));

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            //cek apakah ada barang yang sama di cart
            const cartItem = this.items.find((item) => item.id === newItem.id);
            //jika belum ada
            if(!cartItem){
                this.items.push({...newItem, quantity: 1, total: newItem.price});
                this.quantity++;
                this.total+= newItem.price;
            } else{
                //jika sudah ada, cek apakah barang beda atau sama dengan yang ada di cart
                this.items = this.items.map((item) => {
                    //jika barang berbeda
                    if(item.id !== newItem.id){
                        return item;
                    } else {
                        //jika barang sudah ada, tambah quantity dan sub totalnya
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total+= item.price;
                        return item;
                    }
                })
            }
        },
        remove(id){
            //ambil item yang mau diremove diliat dari id nya
            const cartItem = this.items.find((item) => item.id === id);
            //jika barang yang ada lebih dari satu
            if(cartItem.quantity > 1){
                // cari 1 1
                this.items = this.items.map((item) => {
                    if(item.id !== id){
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total-= item.price;
                        return item;
                    }
                    
                })
            } else if(cartItem.quantity === 1){
                //jika barang hanya 1
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        }
    });
});


//rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};

