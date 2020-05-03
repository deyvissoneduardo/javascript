new Vue({
    el: '#app',
    data: {
        title: 'Gerador de QRCode',
        text: '',
        qrcode: new QRious({
            size: 300
        })
    },
    computed: {
        newQRCode(){
            this.qrcode.value = this.text
            return this.qrcode.toDataURL()
        }
    }
})