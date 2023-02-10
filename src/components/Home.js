import WizardsIndex from './wizards/WizardsIndex'
import Container from 'react-bootstrap/Container'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<Container className="m-2" sytle={{textAlign: 'center'}}>
			<h2>Witches and Wizards</h2>
			<WizardsIndex msgAlert= { props.msgAlert } />
		</Container>
	)
}

export default Home
