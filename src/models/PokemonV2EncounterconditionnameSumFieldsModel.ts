import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionnameSumFieldsModelBase } from "./PokemonV2EncounterconditionnameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionnameSumFieldsModel */
export interface PokemonV2EncounterconditionnameSumFieldsModelType extends Instance<typeof PokemonV2EncounterconditionnameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionnameSumFieldsModel */
export { selectFromPokemonV2EncounterconditionnameSumFields, pokemonV2EncounterconditionnameSumFieldsModelPrimitives, PokemonV2EncounterconditionnameSumFieldsModelSelector } from "./PokemonV2EncounterconditionnameSumFieldsModel.base"

/**
 * PokemonV2EncounterconditionnameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2EncounterconditionnameSumFieldsModel = PokemonV2EncounterconditionnameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
