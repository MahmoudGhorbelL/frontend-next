'use client';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import Link from 'next/link';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import CategoryIcon from '@mui/icons-material/Category';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GroupIcon from '@mui/icons-material/Group';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BarChartIcon from '@mui/icons-material/BarChart';
import LightModeIcon from '@mui/icons-material/LightMode';

const SideBar = () => {
    return (
        <Sidebar style={{ position: 'fixed', top: 0, left: 0, height: '100%', width: '250px', backgroundColor: '#2c303b' }}>
            <Menu
                menuItemStyles={{
                    button: ({ level, active, disabled }) => {
                        // only apply styles on first level elements of the tree
                        if (level === 0)
                            return {
                                color: disabled ? '#b4c2c0' : '#040404',
                                backgroundColor: active ? '#44b89d' : '#44b89d',
                                height: '60px',
                                fontSize: '1.2rem',
                                borderRadius: '5px',
                                marginBottom: '10px',
                                padding: '0 20px', // add padding to the left and right of the MenuItem
                            };
                    },
                }}
            >
                <MenuItem>
                    <div className="card" style={{ backgroundColor: '#44eme2', height: '60px' }}>
                        <div className="card-body" style={{ display: 'flex', alignItems: 'center' }}>
                            <AdminPanelSettingsIcon style={{ marginRight: '10px' }} /> Administrateur
                        </div>
                    </div>
                </MenuItem>
                <MenuItem component={<Link href="http://localhost:3000/" />}>
                    <DashboardIcon style={{ marginRight: '10px', fontSize: '2.5rem' }} /> Home
                </MenuItem>
                <MenuItem component={<Link href="/admin/products" />}>
                    <ArticleIcon style={{ marginRight: '10px', fontSize: '2.5rem' }} /> Produits
                </MenuItem>
                <MenuItem component={<Link href="/admin/categories" />}>
                    <CategoryIcon style={{ marginRight: '10px', fontSize: '2rem' }} /> Catégories
                </MenuItem>
                <MenuItem component={<Link href="/admin/users" />}>
                    <GroupIcon style={{ marginRight: '10px', fontSize: '2rem' }} /> Utilisateurs
                </MenuItem>
                <MenuItem component={<Link href="https://dashboard.stripe.com/test/payments" />}>
                    <ReceiptIcon style={{ marginRight: '10px', fontSize: '2rem' }} /> Payments
                </MenuItem>
                <MenuItem component={<Link href="https://openlibrary.org/" />}>
                    <CalendarMonthIcon style={{ marginRight: '10px', fontSize: '2rem' }} /> librairie Recommandée
                </MenuItem>
                <MenuItem component={<Link href="https://www.chartjs.org/" />}>
                    <BarChartIcon style={{ marginRight: '10px', fontSize: '2rem' }} /> Chart
                </MenuItem>
                <MenuItem component={<Link href="https://www.decisionfoundry.com/tableau/tableau-dashboard/" />}>
                    <LightModeIcon style={{ marginRight: '10px', fontSize: '2rem' }} /> Thèmes
                </MenuItem>
            </Menu>
        </Sidebar>
    );
};

export default SideBar;