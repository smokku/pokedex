import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthratedescriptionSumFieldsModelBase } from "./PokemonV2GrowthratedescriptionSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthratedescriptionSumFieldsModel */
export interface PokemonV2GrowthratedescriptionSumFieldsModelType extends Instance<typeof PokemonV2GrowthratedescriptionSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthratedescriptionSumFieldsModel */
export { selectFromPokemonV2GrowthratedescriptionSumFields, pokemonV2GrowthratedescriptionSumFieldsModelPrimitives, PokemonV2GrowthratedescriptionSumFieldsModelSelector } from "./PokemonV2GrowthratedescriptionSumFieldsModel.base"

/**
 * PokemonV2GrowthratedescriptionSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2GrowthratedescriptionSumFieldsModel = PokemonV2GrowthratedescriptionSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
