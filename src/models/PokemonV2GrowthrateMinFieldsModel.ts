import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthrateMinFieldsModelBase } from "./PokemonV2GrowthrateMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthrateMinFieldsModel */
export interface PokemonV2GrowthrateMinFieldsModelType extends Instance<typeof PokemonV2GrowthrateMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthrateMinFieldsModel */
export { selectFromPokemonV2GrowthrateMinFields, pokemonV2GrowthrateMinFieldsModelPrimitives, PokemonV2GrowthrateMinFieldsModelSelector } from "./PokemonV2GrowthrateMinFieldsModel.base"

/**
 * PokemonV2GrowthrateMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2GrowthrateMinFieldsModel = PokemonV2GrowthrateMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
