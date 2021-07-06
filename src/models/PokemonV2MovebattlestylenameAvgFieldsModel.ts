import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestylenameAvgFieldsModelBase } from "./PokemonV2MovebattlestylenameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestylenameAvgFieldsModel */
export interface PokemonV2MovebattlestylenameAvgFieldsModelType extends Instance<typeof PokemonV2MovebattlestylenameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestylenameAvgFieldsModel */
export { selectFromPokemonV2MovebattlestylenameAvgFields, pokemonV2MovebattlestylenameAvgFieldsModelPrimitives, PokemonV2MovebattlestylenameAvgFieldsModelSelector } from "./PokemonV2MovebattlestylenameAvgFieldsModel.base"

/**
 * PokemonV2MovebattlestylenameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MovebattlestylenameAvgFieldsModel = PokemonV2MovebattlestylenameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
