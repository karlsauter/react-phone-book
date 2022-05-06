'use-strict'

const style = {
    table: {
        borderCollapse: "collapse",
    },
    tableCell: {
        border: "1px solid gray",
        margin: 0,
        padding: "5px 10px",
        width: "max-content",
        minWidth: "150px",
    },
    form: {
        container: {
            padding: "20px",
            border: "1px solid #F0F8FF",
            borderRadius: "15px",
            width: "max-content",
            marginBottom: "40px",
        },
        inputs: {
            marginBottom: "5px",
        },
        submitBtn: {
            marginTop: "10px",
            padding: "10px 15px",
            border: "none",
            backgroundColor: "lightseagreen",
            fontSize: "14px",
            borderRadius: "5px",
        },
    },
};

function PhoneBookForm({addEntryToPhoneBook}) {
    const [userFirstname, setUserFirstname] = React.useState('')
    const [userLastname, setUserLastname] = React.useState('')
    const [userPhone, setUserPhone] = React.useState('')

    const handleFirstnameChange = (e) => {
        setUserFirstname(e.target.value)
    }
    
    const handleLastnameChange = (e) => {
        setUserLastname(e.target.value)
    }

    const handlePhoneChange = (e) => {
        setUserPhone(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const contact = {
            userFirstname: userFirstname,
            userLastname: userLastname,
            userPhone: userPhone
        }
        resetForm()
        addEntryToPhoneBook(contact)
    }

    const resetForm = () => {
        setUserFirstname('')
        setUserLastname('')
        setUserPhone('')
    }
    
    return (
        <form onSubmit={handleSubmit} style={style.form.container}>
            <label>First name:</label>
            <br />
            <input
                style={style.form.inputs}
                className="userFirstname"
                name="userFirstname"
                type="text"
                value={userFirstname}
                onChange={handleFirstnameChange}
                placeholder="Coder"
            />
            <br />
            <label>Last name:</label>
            <br />
            <input
                style={style.form.inputs}
                className="userLastname"
                name="userLastname"
                type="text"
                value={userLastname}
                onChange={handleLastnameChange}
                placeholder="Byte"
            />
            <br />
            <label>Phone:</label>
            <br />
            <input
                style={style.form.inputs}
                className="userPhone"
                name="userPhone"
                type="text" 
                value={userPhone}
                onChange={handlePhoneChange}
                placeholder="12345"
            />
            <br />
            <input
                style={style.form.submitBtn}
                className="submitButton"
                type="submit"
                value="Add User" 
            />
        </form>
    );
}

function InformationTable(props) {

    const phoneList = props.phoneBook.map((contact, id) => 
        <tr key={id}>
            <td style={style.tableCell}>{contact.userFirstname}</td>
            <td style={style.tableCell}>{contact.userLastname}</td>
            <td style={style.tableCell}>{contact.userPhone}</td>
        </tr>
    )

    return (
        <table style={style.table} className="informationTable">
            <thead>
                <tr>
                    <th style={style.tableCell}>First name</th>
                    <th style={style.tableCell}>Last name</th>
                    <th style={style.tableCell}>Phone</th>
                </tr>
            </thead>
            <tbody>
                {phoneList}
            </tbody>
        </table>
    )
}

function App() {
    const [phoneBook, setPhoneBook] = React.useState([])

    const addEntryToPhoneBook = (contact) => {
        setPhoneBook(prevPhoneBook => [...prevPhoneBook, contact])
    }

    return (
        <>
            <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook}/>
            <InformationTable phoneBook={phoneBook}/>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('react-root'))