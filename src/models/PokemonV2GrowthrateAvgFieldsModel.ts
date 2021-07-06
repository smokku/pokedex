import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthrateAvgFieldsModelBase } from "./PokemonV2GrowthrateAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthrateAvgFieldsModel */
export interface PokemonV2GrowthrateAvgFieldsModelType extends Instance<typeof PokemonV2GrowthrateAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthrateAvgFieldsModel */
export { selectFromPokemonV2GrowthrateAvgFields, pokemonV2GrowthrateAvgFieldsModelPrimitives, PokemonV2GrowthrateAvgFieldsModelSelector } from "./PokemonV2GrowthrateAvgFieldsModel.base"

/**
 * PokemonV2GrowthrateAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2GrowthrateAvgFieldsModel = PokemonV2GrowthrateAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
