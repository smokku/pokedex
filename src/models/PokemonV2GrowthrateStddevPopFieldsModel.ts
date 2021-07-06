import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthrateStddevPopFieldsModelBase } from "./PokemonV2GrowthrateStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthrateStddevPopFieldsModel */
export interface PokemonV2GrowthrateStddevPopFieldsModelType extends Instance<typeof PokemonV2GrowthrateStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthrateStddevPopFieldsModel */
export { selectFromPokemonV2GrowthrateStddevPopFields, pokemonV2GrowthrateStddevPopFieldsModelPrimitives, PokemonV2GrowthrateStddevPopFieldsModelSelector } from "./PokemonV2GrowthrateStddevPopFieldsModel.base"

/**
 * PokemonV2GrowthrateStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2GrowthrateStddevPopFieldsModel = PokemonV2GrowthrateStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
