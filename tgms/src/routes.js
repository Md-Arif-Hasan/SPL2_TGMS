import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import aboutus from './components/aboutus'
import password from './components/password'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard'
import FileUp from './components/FileUp'
import Dashboard2 from './components/Dashboard2'
import Attendence from './components/Attendence'
import EmployeeList from './components/EmployeeList'
import Payslip from './components/Payslip'
import Download from './components/Download'
import LoanSet from './components/LoanSet'
import SalaryInsert from './components/SalaryInsert'
import adduser from './components/adduser'
import warehousereport from './components/warehousereport'
import warehousein from './components/warehousein'
import farmerlist from './components/farmerlist'
import repayment from './components/repayment'
import wagestransaction from './components/wagestransaction'
import salarytransaction from './components/salarytransaction'
import gallery from './components/gallery'
import alltransaction from './components/alltransaction'
import transactionsearch from './components/transactionsearch'
import yearlypayslip from './components/yearlypayslip'
import profilepage from './components/profilepage'


Vue.use(VueRouter);

const routes = [
    { path: '/', component: Register },
    { path: '/login', component: Login },
    { path: '/home', component: Home },
    { path: '/about', component: aboutus },
    { path: '/pass', component: password },
    { path: '/profile', component: Profile, name: 'Profile' },
    { path: '/dash', component: Dashboard },
    { path: '/files', component: FileUp },
    { path: '/dash2', component: Dashboard2 },
    { path: '/attend', component: Attendence },
    { path: '/emplist', component: EmployeeList },
    { path: '/Payslip', component: Payslip },
    { path: '/Download', component: Download },
    { path: '/set', component: LoanSet },
    { path: '/sin', component: SalaryInsert },
    { path: '/add', component: adduser },
    { path: '/wreport', component: warehousereport },
    { path: '/win', component: warehousein },
    { path: '/flist', component: farmerlist },
    { path: '/repay', component: repayment, name: 'repayment' },
    { path: '/wagestrans', component: wagestransaction },
    { path: '/salarytrans', component: salarytransaction },
    { path: '/gallery', component: gallery },
    { path: '/alltrans', component: alltransaction},
    { path: '/search', component: transactionsearch},
    { path: '/ypayslip', component: yearlypayslip},
    { path: '/profilepage', component: profilepage}
    
    

]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;