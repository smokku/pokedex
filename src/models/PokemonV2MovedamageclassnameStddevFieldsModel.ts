import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassnameStddevFieldsModelBase } from "./PokemonV2MovedamageclassnameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassnameStddevFieldsModel */
export interface PokemonV2MovedamageclassnameStddevFieldsModelType extends Instance<typeof PokemonV2MovedamageclassnameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassnameStddevFieldsModel */
export { selectFromPokemonV2MovedamageclassnameStddevFields, pokemonV2MovedamageclassnameStddevFieldsModelPrimitives, PokemonV2MovedamageclassnameStddevFieldsModelSelector } from "./PokemonV2MovedamageclassnameStddevFieldsModel.base"

/**
 * PokemonV2MovedamageclassnameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovedamageclassnameStddevFieldsModel = PokemonV2MovedamageclassnameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
