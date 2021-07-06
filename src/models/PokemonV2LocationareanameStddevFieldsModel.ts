import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareanameStddevFieldsModelBase } from "./PokemonV2LocationareanameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareanameStddevFieldsModel */
export interface PokemonV2LocationareanameStddevFieldsModelType extends Instance<typeof PokemonV2LocationareanameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareanameStddevFieldsModel */
export { selectFromPokemonV2LocationareanameStddevFields, pokemonV2LocationareanameStddevFieldsModelPrimitives, PokemonV2LocationareanameStddevFieldsModelSelector } from "./PokemonV2LocationareanameStddevFieldsModel.base"

/**
 * PokemonV2LocationareanameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2LocationareanameStddevFieldsModel = PokemonV2LocationareanameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
