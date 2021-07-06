import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluenameSumFieldsModelBase } from "./PokemonV2EncounterconditionvaluenameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluenameSumFieldsModel */
export interface PokemonV2EncounterconditionvaluenameSumFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvaluenameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluenameSumFieldsModel */
export { selectFromPokemonV2EncounterconditionvaluenameSumFields, pokemonV2EncounterconditionvaluenameSumFieldsModelPrimitives, PokemonV2EncounterconditionvaluenameSumFieldsModelSelector } from "./PokemonV2EncounterconditionvaluenameSumFieldsModel.base"

/**
 * PokemonV2EncounterconditionvaluenameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2EncounterconditionvaluenameSumFieldsModel = PokemonV2EncounterconditionvaluenameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
