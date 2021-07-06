import { Instance } from "mobx-state-tree"
import { PokemonV2TypenameSumFieldsModelBase } from "./PokemonV2TypenameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypenameSumFieldsModel */
export interface PokemonV2TypenameSumFieldsModelType extends Instance<typeof PokemonV2TypenameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypenameSumFieldsModel */
export { selectFromPokemonV2TypenameSumFields, pokemonV2TypenameSumFieldsModelPrimitives, PokemonV2TypenameSumFieldsModelSelector } from "./PokemonV2TypenameSumFieldsModel.base"

/**
 * PokemonV2TypenameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2TypenameSumFieldsModel = PokemonV2TypenameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
