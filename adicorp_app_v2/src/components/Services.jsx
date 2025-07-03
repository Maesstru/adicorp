import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { Typography } from '@mui/material';

const treeData = [
  {
    id: 'grid',
    label: 'Data Grid',
    children: [
      { id: 'grid-community', label: '@mui/x-data-grid' },
      { id: 'grid-pro', label: '@mui/x-data-grid-pro' },
      { id: 'grid-premium', label: '@mui/x-data-grid-premium' },
    ],
  },
  {
    id: 'pickers',
    label: 'Date and Time Pickers',
    children: [
      { id: 'pickers-community', label: '@mui/x-date-pickers' },
      { id: 'pickers-pro', label: '@mui/x-date-pickers-pro' },
    ],
  },
  {
    id: 'charts',
    label: 'Charts',
    children: [{ id: 'charts-community', label: '@mui/x-charts' }],
  },
  {
    id: 'tree-view',
    label: 'Tree View',
    children: [{ id: 'tree-view-community', label: '@mui/x-tree-view' }],
  },
];

const services = [
  {
    id: 'services',
    label: 'Services',
    children: treeData,
  },
];

const renderTree = (node) => (
  <TreeItem key={node.id} itemId={node.id} label={node.label}>
    {Array.isArray(node.children) ? node.children.map(renderTree) : null}
  </TreeItem>
);

export default function Services() {
  return (
    <Box>
      <SimpleTreeView>{services.map(renderTree)}</SimpleTreeView>
    </Box>
  );
}
