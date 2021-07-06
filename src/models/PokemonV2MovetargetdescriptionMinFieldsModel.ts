import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetdescriptionMinFieldsModelBase } from "./PokemonV2MovetargetdescriptionMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetdescriptionMinFieldsModel */
export interface PokemonV2MovetargetdescriptionMinFieldsModelType extends Instance<typeof PokemonV2MovetargetdescriptionMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetdescriptionMinFieldsModel */
export { selectFromPokemonV2MovetargetdescriptionMinFields, pokemonV2MovetargetdescriptionMinFieldsModelPrimitives, PokemonV2MovetargetdescriptionMinFieldsModelSelector } from "./PokemonV2MovetargetdescriptionMinFieldsModel.base"

/**
 * PokemonV2MovetargetdescriptionMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MovetargetdescriptionMinFieldsModel = PokemonV2MovetargetdescriptionMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
