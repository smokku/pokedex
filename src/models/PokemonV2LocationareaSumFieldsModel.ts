import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaSumFieldsModelBase } from "./PokemonV2LocationareaSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaSumFieldsModel */
export interface PokemonV2LocationareaSumFieldsModelType extends Instance<typeof PokemonV2LocationareaSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaSumFieldsModel */
export { selectFromPokemonV2LocationareaSumFields, pokemonV2LocationareaSumFieldsModelPrimitives, PokemonV2LocationareaSumFieldsModelSelector } from "./PokemonV2LocationareaSumFieldsModel.base"

/**
 * PokemonV2LocationareaSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2LocationareaSumFieldsModel = PokemonV2LocationareaSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
