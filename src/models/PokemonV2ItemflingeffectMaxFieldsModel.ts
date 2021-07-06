import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffectMaxFieldsModelBase } from "./PokemonV2ItemflingeffectMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffectMaxFieldsModel */
export interface PokemonV2ItemflingeffectMaxFieldsModelType extends Instance<typeof PokemonV2ItemflingeffectMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffectMaxFieldsModel */
export { selectFromPokemonV2ItemflingeffectMaxFields, pokemonV2ItemflingeffectMaxFieldsModelPrimitives, PokemonV2ItemflingeffectMaxFieldsModelSelector } from "./PokemonV2ItemflingeffectMaxFieldsModel.base"

/**
 * PokemonV2ItemflingeffectMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2ItemflingeffectMaxFieldsModel = PokemonV2ItemflingeffectMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
