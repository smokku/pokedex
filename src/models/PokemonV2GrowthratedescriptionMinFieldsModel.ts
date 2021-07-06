import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthratedescriptionMinFieldsModelBase } from "./PokemonV2GrowthratedescriptionMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthratedescriptionMinFieldsModel */
export interface PokemonV2GrowthratedescriptionMinFieldsModelType extends Instance<typeof PokemonV2GrowthratedescriptionMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthratedescriptionMinFieldsModel */
export { selectFromPokemonV2GrowthratedescriptionMinFields, pokemonV2GrowthratedescriptionMinFieldsModelPrimitives, PokemonV2GrowthratedescriptionMinFieldsModelSelector } from "./PokemonV2GrowthratedescriptionMinFieldsModel.base"

/**
 * PokemonV2GrowthratedescriptionMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2GrowthratedescriptionMinFieldsModel = PokemonV2GrowthratedescriptionMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
