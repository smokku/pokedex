import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetMinFieldsModelBase } from "./PokemonV2MovetargetMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetMinFieldsModel */
export interface PokemonV2MovetargetMinFieldsModelType extends Instance<typeof PokemonV2MovetargetMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetMinFieldsModel */
export { selectFromPokemonV2MovetargetMinFields, pokemonV2MovetargetMinFieldsModelPrimitives, PokemonV2MovetargetMinFieldsModelSelector } from "./PokemonV2MovetargetMinFieldsModel.base"

/**
 * PokemonV2MovetargetMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MovetargetMinFieldsModel = PokemonV2MovetargetMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
