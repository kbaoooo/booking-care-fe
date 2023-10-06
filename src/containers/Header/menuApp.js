export const adminMenu = [
  {
    // quản lí thành viên
    name: "menu.system.member-administrator.header",
    menus: [
      { name: "menu.member.manage-user", link: "/system/user-manage" },
      { name: "menu.member.manage-doctor", link: "/system/doctor-manage" },
      { name: "menu.member.manage-admin", link: "/system/admin-manage" },
      { name: "menu.member.manage-user-redux", link: "/system/user-redux" },
      { name: "menu.member.CRUD", link: "/system/doctor-manage" },
      { name: "menu.member.CRUD-redux", link: "/system/admin-manage" },
    ],
  },
  {
    // quản lí phòng khám
    name: "menu.system.clinic-administrator.header",
    menus: [{ name: "menu.member.manage-user", link: "/system/manage-clinic" }],
  },
  {
    // quản lí chuyên khoa
    name: "menu.system.specialty-administrator.header",
    menus: [{ name: "menu.member.manage-user", link: "/system/manage-clinic" }],
  },
  {
    // quản lí cẩm nang
    name: "menu.system.handbook-administrator.header",
    menus: [{ name: "menu.member.manage-user", link: "/system/manage-clinic" }],
  },
];

export const doctorMenu = [
  {
    name: "menu.doctor.title",
    menus: [
      {
        name: "menu.doctor.manage-schedule-menu",
        link: "/doctor/manage-schedule",
      },
    ],
  },
];
