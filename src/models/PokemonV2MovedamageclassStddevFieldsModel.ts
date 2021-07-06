import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassStddevFieldsModelBase } from "./PokemonV2MovedamageclassStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassStddevFieldsModel */
export interface PokemonV2MovedamageclassStddevFieldsModelType extends Instance<typeof PokemonV2MovedamageclassStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassStddevFieldsModel */
export { selectFromPokemonV2MovedamageclassStddevFields, pokemonV2MovedamageclassStddevFieldsModelPrimitives, PokemonV2MovedamageclassStddevFieldsModelSelector } from "./PokemonV2MovedamageclassStddevFieldsModel.base"

/**
 * PokemonV2MovedamageclassStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovedamageclassStddevFieldsModel = PokemonV2MovedamageclassStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
