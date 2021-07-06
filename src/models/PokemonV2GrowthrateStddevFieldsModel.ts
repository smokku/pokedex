import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthrateStddevFieldsModelBase } from "./PokemonV2GrowthrateStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthrateStddevFieldsModel */
export interface PokemonV2GrowthrateStddevFieldsModelType extends Instance<typeof PokemonV2GrowthrateStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthrateStddevFieldsModel */
export { selectFromPokemonV2GrowthrateStddevFields, pokemonV2GrowthrateStddevFieldsModelPrimitives, PokemonV2GrowthrateStddevFieldsModelSelector } from "./PokemonV2GrowthrateStddevFieldsModel.base"

/**
 * PokemonV2GrowthrateStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2GrowthrateStddevFieldsModel = PokemonV2GrowthrateStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
