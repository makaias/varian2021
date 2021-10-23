import {Box, GridItem, GridItemProps, HStack, VStack} from '@chakra-ui/react';
import FormikEditable from '../formik/FormikEditable';

export interface GridFieldProps {
  name: string;
  title?: string;
  colSpan?: number;
}

export function GridContent({children, ...props}: GridItemProps) {
  return (
    <GridItem textAlign="center" {...props} colspan border="1px solid" p={2} borderColor="gray.200">
      {children}
    </GridItem>
  );
}

export function GridField({name, title, colSpan}: GridFieldProps) {
  return (
    <GridItem colSpan={colSpan} border="1px solid" p={1} borderColor="gray.200">
      <HStack align="stretch">
        <Box mb={-2} fontSize="sm" color="gray.500">
          {title}
        </Box>
        <Box flex={1} p={1}>
          <FormikEditable name={name} isDisabled={false} />
        </Box>
      </HStack>
    </GridItem>
  );
}

export function GridFieldCompact({name, title, colSpan}: GridFieldProps) {
  return (
    <GridItem colSpan={colSpan} border="1px solid" p={1} borderColor="gray.200">
      <VStack spacing={-2} align="stretch">
        <Box fontSize="sm" color="gray.500">
          {title}
        </Box>
        <Box flex={1} pl={4}>
          <FormikEditable name={name} isDisabled={false} />
        </Box>
      </VStack>
    </GridItem>
  );
}
