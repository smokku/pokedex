import { Instance } from "mobx-state-tree"
import { PokemonV2LocationnameSumFieldsModelBase } from "./PokemonV2LocationnameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationnameSumFieldsModel */
export interface PokemonV2LocationnameSumFieldsModelType extends Instance<typeof PokemonV2LocationnameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationnameSumFieldsModel */
export { selectFromPokemonV2LocationnameSumFields, pokemonV2LocationnameSumFieldsModelPrimitives, PokemonV2LocationnameSumFieldsModelSelector } from "./PokemonV2LocationnameSumFieldsModel.base"

/**
 * PokemonV2LocationnameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2LocationnameSumFieldsModel = PokemonV2LocationnameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
