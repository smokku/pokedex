import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassdescriptionMaxFieldsModelBase } from "./PokemonV2MovedamageclassdescriptionMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassdescriptionMaxFieldsModel */
export interface PokemonV2MovedamageclassdescriptionMaxFieldsModelType extends Instance<typeof PokemonV2MovedamageclassdescriptionMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassdescriptionMaxFieldsModel */
export { selectFromPokemonV2MovedamageclassdescriptionMaxFields, pokemonV2MovedamageclassdescriptionMaxFieldsModelPrimitives, PokemonV2MovedamageclassdescriptionMaxFieldsModelSelector } from "./PokemonV2MovedamageclassdescriptionMaxFieldsModel.base"

/**
 * PokemonV2MovedamageclassdescriptionMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MovedamageclassdescriptionMaxFieldsModel = PokemonV2MovedamageclassdescriptionMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
