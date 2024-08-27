import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.data('todo' , () => ({
    todos: [
        {
            id: 1,
            nama: 'Ngopi',
            tanggal: '08-08-2024',
            status: false
        },
        {
            id: 2,
            nama: 'Ngoding',
            tanggal: '08-08-2024',
            status: false
        },
        {
            id: 3,
            nama: 'Ngegame',
            tanggal: '08-08-2024',
            status: false
        }
    ],
    todoName: '',
    todoDate: '',
    isAlert: false,
    addTodo() {
        this.isAlert = this.isAlert && false;
        if (this.todoName || this.todoName.length > 0) {
            const newData = { id: this.todos.length + 1, nama: this.todoName, tanggal: this.todoDate || '--', status: false }
            this.todos.push(newData);
        }else{
            this.isAlert = true;
        }
        this.todoName = '';
        this.todoDate = '';
    }
}));

Alpine.start();