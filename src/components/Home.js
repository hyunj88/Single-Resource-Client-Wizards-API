import WizardsIndex from './wizards/WizardsIndex'
const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2>Witches and Wizards</h2>
			<WizardsIndex msgAlert= { props.msgAlert } />
		</>
	)
}

export default Home
