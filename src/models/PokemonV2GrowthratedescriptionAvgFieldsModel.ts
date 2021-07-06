import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthratedescriptionAvgFieldsModelBase } from "./PokemonV2GrowthratedescriptionAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthratedescriptionAvgFieldsModel */
export interface PokemonV2GrowthratedescriptionAvgFieldsModelType extends Instance<typeof PokemonV2GrowthratedescriptionAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthratedescriptionAvgFieldsModel */
export { selectFromPokemonV2GrowthratedescriptionAvgFields, pokemonV2GrowthratedescriptionAvgFieldsModelPrimitives, PokemonV2GrowthratedescriptionAvgFieldsModelSelector } from "./PokemonV2GrowthratedescriptionAvgFieldsModel.base"

/**
 * PokemonV2GrowthratedescriptionAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2GrowthratedescriptionAvgFieldsModel = PokemonV2GrowthratedescriptionAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
