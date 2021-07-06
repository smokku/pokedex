import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareaSumFieldsModelBase } from "./PokemonV2PalparkareaSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareaSumFieldsModel */
export interface PokemonV2PalparkareaSumFieldsModelType extends Instance<typeof PokemonV2PalparkareaSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareaSumFieldsModel */
export { selectFromPokemonV2PalparkareaSumFields, pokemonV2PalparkareaSumFieldsModelPrimitives, PokemonV2PalparkareaSumFieldsModelSelector } from "./PokemonV2PalparkareaSumFieldsModel.base"

/**
 * PokemonV2PalparkareaSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PalparkareaSumFieldsModel = PokemonV2PalparkareaSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
