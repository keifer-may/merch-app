export default function Card(props){
    return(
        <div 
        class="bg-zinc-700 text-zinc-800 dark:bg-zinc-300 dark:text-zinc-800 p-4 text-center md-strength transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        classList={{"rounded-md":props.rounded, "shadow-md": !props.flat}}
        >
            {props.children}
        </div>

    )
}