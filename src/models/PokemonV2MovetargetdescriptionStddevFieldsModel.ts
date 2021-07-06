import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetdescriptionStddevFieldsModelBase } from "./PokemonV2MovetargetdescriptionStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetdescriptionStddevFieldsModel */
export interface PokemonV2MovetargetdescriptionStddevFieldsModelType extends Instance<typeof PokemonV2MovetargetdescriptionStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetdescriptionStddevFieldsModel */
export { selectFromPokemonV2MovetargetdescriptionStddevFields, pokemonV2MovetargetdescriptionStddevFieldsModelPrimitives, PokemonV2MovetargetdescriptionStddevFieldsModelSelector } from "./PokemonV2MovetargetdescriptionStddevFieldsModel.base"

/**
 * PokemonV2MovetargetdescriptionStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovetargetdescriptionStddevFieldsModel = PokemonV2MovetargetdescriptionStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
