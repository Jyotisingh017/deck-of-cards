import Box from "@mui/material/Box";

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "2vw" }}>
      {children}
    </Box>
  );
};

export default Layout;
