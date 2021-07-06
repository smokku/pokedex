import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetStddevFieldsModelBase } from "./PokemonV2MovetargetStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetStddevFieldsModel */
export interface PokemonV2MovetargetStddevFieldsModelType extends Instance<typeof PokemonV2MovetargetStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetStddevFieldsModel */
export { selectFromPokemonV2MovetargetStddevFields, pokemonV2MovetargetStddevFieldsModelPrimitives, PokemonV2MovetargetStddevFieldsModelSelector } from "./PokemonV2MovetargetStddevFieldsModel.base"

/**
 * PokemonV2MovetargetStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovetargetStddevFieldsModel = PokemonV2MovetargetStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
