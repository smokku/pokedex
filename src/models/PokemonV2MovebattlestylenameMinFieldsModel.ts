import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestylenameMinFieldsModelBase } from "./PokemonV2MovebattlestylenameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestylenameMinFieldsModel */
export interface PokemonV2MovebattlestylenameMinFieldsModelType extends Instance<typeof PokemonV2MovebattlestylenameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestylenameMinFieldsModel */
export { selectFromPokemonV2MovebattlestylenameMinFields, pokemonV2MovebattlestylenameMinFieldsModelPrimitives, PokemonV2MovebattlestylenameMinFieldsModelSelector } from "./PokemonV2MovebattlestylenameMinFieldsModel.base"

/**
 * PokemonV2MovebattlestylenameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MovebattlestylenameMinFieldsModel = PokemonV2MovebattlestylenameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
