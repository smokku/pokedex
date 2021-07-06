import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvalueMaxFieldsModelBase } from "./PokemonV2EncounterconditionvalueMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvalueMaxFieldsModel */
export interface PokemonV2EncounterconditionvalueMaxFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvalueMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvalueMaxFieldsModel */
export { selectFromPokemonV2EncounterconditionvalueMaxFields, pokemonV2EncounterconditionvalueMaxFieldsModelPrimitives, PokemonV2EncounterconditionvalueMaxFieldsModelSelector } from "./PokemonV2EncounterconditionvalueMaxFieldsModel.base"

/**
 * PokemonV2EncounterconditionvalueMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2EncounterconditionvalueMaxFieldsModel = PokemonV2EncounterconditionvalueMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
