// import React, {Component} from "react" // в Component для оптимизации необходимо реализовывать
                                        // проеверку состояния  через shouldComponentUpdate вручную
import React, {PureComponent} from "react" // удобен при маленькой структуре дерева при больщих может
                                            // быть не экономично. Проверки лучше всего реализовывать на
                                            //листьях, а PureComponent проверяет состояние всего !


export default class App extends PureComponent {
    //для состояния есть несколько вариантов реализации (2 основных)
    //№1
    // constructor(props) {
    //     super(props);
    //     this.state = { value: 1 }
    //     this.handleClick = this.handleClick.bind(this); // биндим handleClick к компоненту
    // }


    //№2
    //сокращенный вариант записи новая форма записи
    state = {value: 2, foo: `bar`}

    handleClick = () => {
        this.setState({value: this.state.value + 1});
    };


    componentDidMount() {
        console.log(`I mounted!`)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`conponentDid updated !`)
    }
// проверка состояния значений foo и value если они не менялись componentDidUpdate не вызывается
//     shouldComponentUpdate(nextProps, nextState, nextContext) {
//         if (nextState.foo === this.state.foo &&
//             nextState.value === this.state.value) {
//             return false;
//         }
//         return true;
//     }
    // проверка отключена так как при использовании PureComponent проверки реализованны

    render() {
        return (
            <div>
                <h1>Hello from App!</h1>
                <h2>{this.state.value}</h2>
                {/* onClick={() => this.setState({value: this.state.value + 1})}
                так не рекомендуется делать иначе при каждом рендере создается новый объект*/}
                <button onClick={this.handleClick}>
                    {/* кроме выполнения стрелочной функции
                    при каждом нажатии на кнопку вызывается компонент componentDidUpdate()
                    */}
                    +
                </button>

            </div>
        )
    }
}
