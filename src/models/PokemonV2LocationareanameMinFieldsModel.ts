import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareanameMinFieldsModelBase } from "./PokemonV2LocationareanameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareanameMinFieldsModel */
export interface PokemonV2LocationareanameMinFieldsModelType extends Instance<typeof PokemonV2LocationareanameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareanameMinFieldsModel */
export { selectFromPokemonV2LocationareanameMinFields, pokemonV2LocationareanameMinFieldsModelPrimitives, PokemonV2LocationareanameMinFieldsModelSelector } from "./PokemonV2LocationareanameMinFieldsModel.base"

/**
 * PokemonV2LocationareanameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2LocationareanameMinFieldsModel = PokemonV2LocationareanameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
