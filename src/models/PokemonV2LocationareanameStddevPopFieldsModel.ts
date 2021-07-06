import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareanameStddevPopFieldsModelBase } from "./PokemonV2LocationareanameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareanameStddevPopFieldsModel */
export interface PokemonV2LocationareanameStddevPopFieldsModelType extends Instance<typeof PokemonV2LocationareanameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareanameStddevPopFieldsModel */
export { selectFromPokemonV2LocationareanameStddevPopFields, pokemonV2LocationareanameStddevPopFieldsModelPrimitives, PokemonV2LocationareanameStddevPopFieldsModelSelector } from "./PokemonV2LocationareanameStddevPopFieldsModel.base"

/**
 * PokemonV2LocationareanameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2LocationareanameStddevPopFieldsModel = PokemonV2LocationareanameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
