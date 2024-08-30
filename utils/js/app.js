import Alpine from "alpinejs";
import Chart from 'chart.js/auto';

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
            status: true
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
    },
    init() {
        this.renderChart();
    },
    removeTask(todo){
        this.todos = this.todos.filter((task) => task !== todo);
    },
    renderChart() {
        const ctx = document.getElementById('todoChart').getContext('2d');
        const totalTodos = this.todos.length;
        const completedTodos = this.todos.filter(todo => todo.status).length;
        const pendingTodos = totalTodos - completedTodos;

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Completed', 'Pending'],
                datasets: [{
                    label: 'Todo Status',
                    data: [completedTodos, pendingTodos],
                    backgroundColor: ['#4caf50', '#f44336'],
                }]
            },
        });
    }
}));

Alpine.start();