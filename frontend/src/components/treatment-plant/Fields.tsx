import {Box, GridItem, GridItemProps, HStack, VStack} from '@chakra-ui/react';
import React, {useContext} from 'react';
import FormikCheckBox from '../formik/FormikCheckBox';
import FormikEditable from '../formik/FormikEditable';

export const EditableContext = React.createContext<boolean>(false);

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
  const editable = useContext(EditableContext);

  return (
    <GridItem colSpan={colSpan} border="1px solid" p={1} borderColor="gray.200">
      <HStack align="stretch">
        {title && (
          <Box mb={-2} fontSize="sm" color="gray.500">
            {title}
          </Box>
        )}
        <Box flex={1} p={1}>
          <FormikEditable name={name} isDisabled={!editable} isPreviewFocusable={!editable} />
        </Box>
      </HStack>
    </GridItem>
  );
}

export function GridFieldCompact({name, title, colSpan}: GridFieldProps) {
  const editable = useContext(EditableContext);

  return (
    <GridItem colSpan={colSpan} border="1px solid" p={1} borderColor="gray.200">
      <VStack spacing={-2} align="stretch">
        {title && (
          <Box fontSize="sm" color="gray.500">
            {title}
          </Box>
        )}
        <Box flex={1} pl={title ? 4 : 0}>
          <FormikEditable isPreviewFocusable={!editable} name={name} isDisabled={!editable} />
        </Box>
      </VStack>
    </GridItem>
  );
}

export function GridCheckBox({name, title, colSpan}: GridFieldProps) {
  const editable = useContext(EditableContext);

  return (
    <GridItem colSpan={colSpan} border="1px solid" p={1} borderColor="gray.200">
      <FormikCheckBox isDisabled={!editable} name={name}>
        {title}
      </FormikCheckBox>
    </GridItem>
  );
}
