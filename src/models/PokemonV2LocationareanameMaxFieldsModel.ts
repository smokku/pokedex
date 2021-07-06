import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareanameMaxFieldsModelBase } from "./PokemonV2LocationareanameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareanameMaxFieldsModel */
export interface PokemonV2LocationareanameMaxFieldsModelType extends Instance<typeof PokemonV2LocationareanameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareanameMaxFieldsModel */
export { selectFromPokemonV2LocationareanameMaxFields, pokemonV2LocationareanameMaxFieldsModelPrimitives, PokemonV2LocationareanameMaxFieldsModelSelector } from "./PokemonV2LocationareanameMaxFieldsModel.base"

/**
 * PokemonV2LocationareanameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2LocationareanameMaxFieldsModel = PokemonV2LocationareanameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
